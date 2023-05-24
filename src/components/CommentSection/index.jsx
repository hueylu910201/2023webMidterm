import { useState, useEffect } from "react";
import { useAddCommentToProduct, useUserInfo, useUpdateProfile, useLogout } from "../../react-query";
import { fetchComments } from "../../api";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./commentSection.module.css"
import { Form, Input, Button, Col, Row } from "antd"; // import the necessary Ant Design components

export default function CommentSection({ productId }) {
      const { data: userInfo } = useUserInfo();
      const [comment, setComment] = useState("");
      const addCommentMutation = useAddCommentToProduct();
      const { data: comments } = useQuery(["comments", productId], () => fetchComments(productId));

      const handleSubmit = (e) => {
        e.preventDefault();
        addCommentMutation.mutate({ productId, userId: userInfo.uid, comment });
        setComment("");
      };

      return (
        <div className={styles.commetArea}>
          {userInfo.uid && (
            <Form onSubmit={handleSubmit} className={styles.commentForm}>
              <Form.Item>
                <Input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.commentForm__button}>
                  Add Comment
                </Button>
              </Form.Item>
            </Form>
          )}
          <ul>
            {comments?.map((comment) => (
              <li key={comment.id}>
                <p>{comment.text}</p>
                <p>By {comment.user}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    // const { data: userInfo } = useUserInfo() || {};
    // const update = useUpdateProfile();
    // const logout = useLogout();
    // const navigate = useNavigate();
    // const [form] = Form.useForm();
    // const [comment, setComment] = useState("");
    // const addCommentMutation = useAddCommentToProduct();
    // const { data: comments } = useQuery(["comments", productId], fetchComments);

    // const onUpdate = async (values) => {
    //     console.log("Received update info: ", values);
    //     update.mutate({ ...values, uid: userInfo.uid });
    // };

    // const onLogout = () => {
    //     logout.mutate();
    //     navigate("/");
    // }

    // useEffect(() => {
    //     form.setFieldsValue(userInfo)
    // }, [userInfo])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addCommentMutation.mutate({ productId, userId: userInfo.uid, comment });
    //     setComment("");
    // };

    // return (
    //     <Form
    //         onFinish={onUpdate}
    //         name="normal_login"
    //         className={styles.commentForm}
    //         form={form}
    //         initialValues={userInfo}
    //         onSubmit={handleSubmit}
    //     >
    //         <Row>
    //             <Col span={4}>
    //                 <Form.Item
    //                     label={!!userInfo?.name
    //                         ? `${userInfo.name}`
    //                         : `尚未登入`
    //                     }
    //                     name="name"
    //                     rules={[
    //                         {
    //                             type: "string",
    //                             message: "並非有效的姓名!",
    //                         },
    //                         {
    //                             message: "請輸入你的姓名!",
    //                         },
    //                     ]}
    //                 >
    //                 </Form.Item>
    //             </Col>
    //             <Col span={8}>
    //                 <Input placeholder="請留下你的評論" className={styles.input} value={comment}
    //                     onChange={(e) => setComment(e.target.value)} />
    //                 <Form.Item>
    //                     <Button
    //                         type="primary"
    //                         htmlType="submit"
    //                         className={styles.commentForm__button}
    //                     >
    //                         送出
    //                     </Button>
    //                 </Form.Item>

    //                 <ul>
    //                     {comments?.map((comment) => (
    //                         <li key={comment.id}>
    //                             <p>{comment.text}</p>
    //                             <p>By {comment.user}</p>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </Col>
    //         </Row>
    //     </Form>
    // );
}