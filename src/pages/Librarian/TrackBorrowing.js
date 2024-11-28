// src/pages/Librarian/TrackBorrowing.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrackBorrowing = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        // Fetch borrowed books from the API
        const fetchBorrowedBooks = async () => {
            try {
                const response = await axios.get('/api/library/borrowed-books'); // Update with your API endpoint
                setBorrowedBooks(response.data);
                setFilteredBooks(response.data); // Initialize with all books
            } catch (error) {
                console.error('Error fetching borrowed books:', error);
            }
        };

        fetchBorrowedBooks();
    }, []);

    // Filter books based on search term
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = borrowedBooks.filter(book =>
            book.title.toLowerCase().includes(value.toLowerCase()) ||
            book.borrowerName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    // Count total borrowed books
    const totalBorrowed = filteredBooks.length;

    return (
        <div className="container mt-4">
            <h2>Track Borrowing</h2>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by Book Title or Borrower Name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Button variant="outline-secondary" onClick={() => setSearchTerm('')}>
                    Clear
                </Button>
            </InputGroup>
            <p>Total Borrowed Books: {totalBorrowed}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Borrower Name</th>
                        <th>Borrowed Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.borrowerName}</td>
                            <td>{new Date(book.borrowedDate).toLocaleDateString()}</td>
                            <td>{new Date(book.dueDate).toLocaleDateString()}</td>
                            <td>{book.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TrackBorrowing;
