import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Avatar from "../../components/image";
import { selectData } from "../../redux-handler/reducers/dataReducer";
import { getRequestParallel, ParallelApiCalling } from "../../services/request";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = useSelector(selectData);
  const users = data.users;

  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const res: any = await ParallelApiCalling([
      getRequestParallel(`https://jsonplaceholder.typicode.com/posts/${id}`),
      getRequestParallel(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      ),
    ]);
    if (res && res.length > 0) {
      const post = res[0]?.data;
      const comment = res[1]?.data;
      setPost(post);
      setComments(comment);
      setLoading(false);
    }
  };

  if (isLoading) return <div>Loading.....</div>;

  let author = users.filter((f: any) => f.id === post.userId);
  if (author && author.length > 0) author = author[0];

  return (
    <div className="row tm-row">
      <div className="col-lg-8 tm-post-col">
        <div className="tm-post-full">
          <div className="mb-4">
            <h2 className="pt-2 tm-color-primary tm-post-title">
              {post.title}
            </h2>
            {/* <p className="tm-mb-40">June 16, 2020 posted by Admin Nat</p> */}
            <p dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="tm-comment tm-mb-45 align-items-center">
              <figure className="tm-comment-figure" style={{ width: 80 }}>
                <Avatar
                  id={author?.id}
                  className="rounded-circle img-thumbnail mw-100"
                />
              </figure>
              <div>
                <figcaption className="tm-color-primary">
                  {author.name}
                </figcaption>
                <p>{author.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="tm-color-primary tm-post-title">Comments</h2>
            <hr className="tm-hr-primary tm-mb-45" />
            {comments &&
              comments.length > 0 &&
              comments.map((com: any, i: any) => (
                <div className="tm-comment tm-mb-45" key={i}>
                  <figure
                    className="tm-comment-figure"
                    style={{
                      minWidth: 150,
                    }}>
                    <Avatar
                      id={com.id}
                      className="rounded-circle img-thumbnail mw-100"
                    />
                    <figcaption className="tm-color-primary text-center">
                      {com.name}
                    </figcaption>
                  </figure>
                  <div>
                    <p>{com.body}</p>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="tm-color-primary">
                        REPLY
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <aside className="col-lg-4 tm-aside-col">
        <div className="tm-post-sidebar">
          <hr className="mb-3 tm-hr-primary" />
          <h2 className="mb-4 tm-post-title tm-color-primary">Categories</h2>
          <ul className="tm-mb-75 pl-5 tm-category-list">
            <li>
              <a href="#" className="tm-color-primary">
                Visual Designs
              </a>
            </li>
            <li>
              <a href="#" className="tm-color-primary">
                Travel Events
              </a>
            </li>
            <li>
              <a href="#" className="tm-color-primary">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="tm-color-primary">
                Video and Audio
              </a>
            </li>
            <li>
              <a href="#" className="tm-color-primary">
                Etiam auctor ac arcu
              </a>
            </li>
            <li>
              <a href="#" className="tm-color-primary">
                Sed im justo diam
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SinglePost;
