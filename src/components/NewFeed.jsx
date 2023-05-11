import React, { useEffect, useState } from "react";
import { loadAllPost } from "../services/Post_service";
import { deletePostService } from "../services/Post_service";
import {
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import Post from "./Post";
import "../components/NewFeed.css";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
const NewFeed = () => {
  const [postContent, setPostcontent] = useState({
    content: [],
    lastPage: false,
    pageNumber: "",
    pageSize: "",
    totalElements: "",
    totalPages: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    //load all the posts from server
    // loadAllPost(0, 5)
    //   .then((data) => {
    //     console.log(data);
    //     setPostcontent(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error("Error in loading posts!!");
    //   });
    changePage(currentPage);
  }, [currentPage]);

  const changePage = (pageNumber = 0, pageSize = 5) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
      return;
    }
    loadAllPost(pageNumber, pageSize)
      .then((data) => {
        setPostcontent({
          content: [...postContent.content, ...data.content],
          lastPage: data.lastPage,
          pageNumber: data.pageNumber,
          pageSize: data.pageSize,
          totalElements: data.totalElements,
          totalPages: data.totalPages,
        });
        window.scroll(0, 0);
      })
      .catch((error) => {
        toast.error("Error in loading posts!!");
      });
  };

  const deletePost = (post) => {
    //going to delete post
    deletePostService(post.postId)
      .then((data) => {
        console.log(data);
        toast.success("Post is Deleted!!");
        let newPostContent=postContent.content.filter(p=>p.postId!=post.postId)
        setPostcontent({...postContent,content:newPostContent})
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in deleteing post!!");
      });
  };


  const changePageInfinite = () => {
    console.log("page changed!!");
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <InfiniteScroll
              dataLength={postContent.content.length}
              next={changePageInfinite}
              hasMore={!postContent.lastPage}
              // endMessage={
              //   <p style={{ textAlign: 'center' }}>
              //     <b>toast.sucess("Yay! You have seen it all")</b>
              //   </p>
              // }
            >
              {postContent.content.map((post) => (
                <Post deletePost={deletePost} post={post} key={post.postId} />
              ))}
            </InfiniteScroll>

            {/* <div className="container-fluid">
              <Pagination>
                <PaginationItem
                  onClick={() => changePage(postContent.pageNumber - 1)}
                  disabled={postContent.pageNumber === 0}
                >
                  <PaginationLink previous></PaginationLink>
                </PaginationItem>
                {[...Array(postContent.totalPages)].map((item, index) => (
                  <PaginationItem
                    onClick={() => changePage(index)}
                    active={index === postContent.pageNumber}
                    key={index}
                  >
                    <PaginationLink>{index + 1}</PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem
                  onClick={() => changePage(postContent.pageNumber + 1)}
                  disabled={postContent.lastPage}
                >
                  <PaginationLink next></PaginationLink>
                </PaginationItem>
              </Pagination>
            </div> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewFeed;
