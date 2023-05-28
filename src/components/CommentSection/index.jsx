import { useState, useEffect } from "react";
import { useAddComment, useUserInfo, useUpdateProfile, useLogout } from "../../react-query";
// import { fetchComments ,addComment} from "../../api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../api";
import styles from "./commentSection.module.css"
import { Form, Input, Button, Col, Row } from "antd"; // import the necessary Ant Design components

export default function CommentSection({ productId }) {
    const { data: userInfo } = useUserInfo() || {};
    const [form] = Form.useForm();
    const [comment, setComment] = useState("");
    const addCommentMutation = useAddComment();
    const update = useUpdateProfile();
    const { data: comments } = useQuery(["comments", productId], getComments);
    // const [mutate] = useMutation(addComment);

    // const onUpdate = async (values) => {
    //     console.log("Received update info: ", values);
    //     update.mutate({ ...values, uid: userInfo.uid ,comment});
    // };

    useEffect(() => {
        form.setFieldsValue(userInfo)
    }, [userInfo])

    const handleSubmit = (e) => {
        // e.preventDefault();
        // mutate(productId, userInfo.uid, comment);
        // setComment("");

        e.preventDefault();
        addCommentMutation.mutate({ queryKey: [productId], userData: { name: userInfo.name, comment } });
        setComment("");

    };

    return (
        <Form
            // onFinish={onUpdate}
            name="normal_login"
            className={styles.commentForm}
            form={form}
            initialValues={userInfo}
            onSubmit={handleSubmit}
        >
            <Row>
                <Col span={4}>
                    <Form.Item
                        label={!!userInfo?.name
                            ? `${userInfo.name}`
                            : `尚未登入`
                        }
                        name="name"
                        rules={[
                            {
                                type: "string",
                                message: "並非有效的姓名!",
                            },
                            {
                                meassage: "請輸入你的姓名!",
                            },
                        ]}
                    >
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Input placeholder="請留下你的評論" className={styles.input} value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.commentForm__button}
                        >
                            送出
                        </Button>
                    </Form.Item>

                    <ul>
                        {comments?.map((comment) => (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>By {comment.userId}</p>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Form>
    );
}