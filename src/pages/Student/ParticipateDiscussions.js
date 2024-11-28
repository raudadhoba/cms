// src/pages/Student/ParticipateDiscussions.js

import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Collapse } from 'react-bootstrap';

const ParticipateDiscussions = () => {
  // Example discussions data
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: 'Best Practices for Java Programming',
      description: 'What are some best practices for writing clean and efficient Java code?',
      comments: [
        { id: 1, text: 'Use meaningful variable names and follow the naming conventions.', author: 'Alice' },
        { id: 2, text: 'Always close resources like database connections.', author: 'Bob' },
      ],
    },
    {
      id: 2,
      title: 'How to optimize SQL queries?',
      description: 'Share your tips on optimizing SQL queries for large datasets.',
      comments: [
        { id: 1, text: 'Using indexes can significantly speed up query performance.', author: 'Charlie' },
      ],
    },
  ]);

  const [newDiscussion, setNewDiscussion] = useState({ title: '', description: '' });
  const [openCommentSection, setOpenCommentSection] = useState(null);

  const handlePostDiscussion = (e) => {
    e.preventDefault();
    if (newDiscussion.title && newDiscussion.description) {
      const newPost = {
        id: discussions.length + 1,
        title: newDiscussion.title,
        description: newDiscussion.description,
        comments: [],
      };
      setDiscussions([newPost, ...discussions]);
      setNewDiscussion({ title: '', description: '' });
      alert('New discussion posted successfully!');
    } else {
      alert('Please enter both a title and description.');
    }
  };

  const handleAddComment = (discussionId, commentText) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion.id === discussionId && commentText) {
        return {
          ...discussion,
          comments: [
            ...discussion.comments,
            { id: discussion.comments.length + 1, text: commentText, author: 'You' },
          ],
        };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Participate in Discussions</h2>
      <p>Engage with your peers and instructors through discussions on various academic topics.</p>

      {/* Post New Discussion Form */}
      <Form className="mb-4" onSubmit={handlePostDiscussion}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="discussionTitle" className="mb-3">
              <Form.Label>Discussion Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter discussion title"
                value={newDiscussion.title}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, title: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="discussionDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter description"
                value={newDiscussion.description}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, description: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Post Discussion
        </Button>
      </Form>

      {/* Discussions List */}
      {discussions.map((discussion) => (
        <Card key={discussion.id} className="mb-3">
          <Card.Body>
            <Card.Title>{discussion.title}</Card.Title>
            <Card.Text>{discussion.description}</Card.Text>
            <Button
              variant="link"
              onClick={() =>
                setOpenCommentSection(openCommentSection === discussion.id ? null : discussion.id)
              }
            >
              {openCommentSection === discussion.id ? 'Hide Comments' : 'View Comments'}
            </Button>
            <Collapse in={openCommentSection === discussion.id}>
              <div className="mt-3">
                <h5>Comments</h5>
                {discussion.comments.map((comment) => (
                  <Card key={comment.id} className="mb-2">
                    <Card.Body>
                      <Card.Text>
                        <strong>{comment.author}:</strong> {comment.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const commentText = e.target.elements[`comment-${discussion.id}`].value;
                    handleAddComment(discussion.id, commentText);
                    e.target.reset();
                  }}
                >
                  <Form.Group controlId={`comment-${discussion.id}`} className="mb-2">
                    <Form.Control type="text" placeholder="Add a comment..." />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Add Comment
                  </Button>
                </Form>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ParticipateDiscussions;
