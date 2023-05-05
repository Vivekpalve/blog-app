import React, { useEffect, useState } from "react";
import { loadAllPost } from "../services/Post_service";
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
const NewFeed = () => {
  const [postContent, setPostcontent] = useState({
    content: [],
    lastPage: false,
    pageNumber: "",
    pageSize: "",
    totalElements: "",
    totalPages: "",
  });

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
    changePage(0);
  }, []);

  const changePage = (pageNumber = 0, pageSize = 5) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
      return;
    }
    loadAllPost(pageNumber, pageSize)
      .then((data) => {
        setPostcontent(data);
        window.scroll(0, 0);
      })
      .catch((error) => {
        toast.error("Error in loading posts!!");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            {postContent.content.map((post) => (
              <Post post={post} />
            ))}

            <div className="container-fluid">
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewFeed;
