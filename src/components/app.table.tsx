'use client';
import { IBlog } from '@/types/blogs';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

interface IProps {
    blogs: IBlog[];
}
function SharedTable(props: IProps) {
    const { blogs } = props;
    console.log('SharedTable', blogs);
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
                {blogs?.map(blog => {
                    return (
                        <tr key={blog.id}>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.content}</td>
                            <td>
                                <Button variant="mx-3 btn-info">View</Button>
                                <Button variant="mx-3 btn btn-primary">Edit</Button>
                                <Button variant="mx-3 btn btn-danger">Delete</Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default SharedTable;