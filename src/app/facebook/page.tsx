'use client'
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function Facebook() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/'); // Redirect to the home page
    }

    return (
        <div>
            <h1>Facebook Page</h1>
            <p>Welcome to the Facebook page!</p>
            <button onClick={() => { handleClick() }}>Back home</button>
            <Button variant="danger">Hoi dan IT</Button>
        </div>
    );
}