
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, CircularProgress } from '@mui/material';
import  '../assets/css/Proposal.css';
const Proposal = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const defaultProposal = {
        title: 'Default Proposal Title',
        description: 'This is a default proposal description.',
        author: 'Default Author',
        created_at: new Date().toISOString()
    };

    const [proposal, setProposal] = useState(defaultProposal);

    useEffect(() => {
        fetch(`/api/proposals/${id}`)
            .then(response => response.json())
            .then(data => setProposal(data))
            .catch(error => console.error('Error fetching proposal:', error));
    }, [id]);

    const handleContribute = () => {
        navigate(`/contribute/${id}`);
    };

    if (!proposal) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container sx={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Typography variant="h4" gutterBottom>
                {proposal.title}
            </Typography>
            <Typography variant="body1" paragraph>
                {proposal.description}
            </Typography>
            <Typography variant="body2">
                <strong>Author:</strong> {proposal.author}
            </Typography>
            <Typography variant="body2" gutterBottom>
                <strong>Created on:</strong> {new Date(proposal.created_at).toLocaleDateString()}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleContribute}
                sx={{ marginTop: '20px' }}
            >
                Contribute
            </Button>
        </Container>
    );
}

export default Proposal;