import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Form = styled('form')(({ theme }) => ({
    '& > *': {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

const Contribute = () => {
    const [formData, setFormData] = useState({
        proposal_name: '',
        proposal_overview: '',
        domain: '',
        key_skill: '',
        team_size: '',
        partner_one_name: '',
        partner_two_name: '',
        partner_one_description: '',
        partner_two_description: '',
        proposal_due_date: '',
        proposal_active: true,
        proposal_completed: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/proposal-coordinator-details/', formData);
            console.log('Form submitted successfully:', response.data);
            toast.success('Form submitted successful');
            setFormData({
                proposal_name: '',
                proposal_overview: '',
                domain: '',
                key_skill: '',
                team_size: '',
                partner_one_name: '',
                partner_two_name: '',
                partner_one_description: '',
                partner_two_description: '',
                proposal_due_date: '',
                proposal_active: true,
                proposal_completed: false,
            })

            // Handle successful form submission (e.g., redirect or show success message)
        } catch (error) {
            alert(error)
            if (error.response && error.response.data) {
                setErrors(error.response.data);
                toast.error('Error submitting form');

            } else {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <Root>
            <Container maxWidth="md">
                <StyledPaper>
                    <Typography variant="h4" gutterBottom>
                        Contribute to Proposal
                    </Typography>
                    <Form onSubmit={handleSubmit}>
                        <TextField
                            label="Proposal Name"
                            variant="outlined"
                            name="proposal_name"
                            value={formData.proposal_name}
                            onChange={handleChange}
                            error={!!errors.proposal_name}
                            helperText={errors.proposal_name ? errors.proposal_name[0] : ''}
                            required
                        />
                        <TextField
                            label="Proposal Overview"
                            variant="outlined"
                            name="proposal_overview"
                            value={formData.proposal_overview}
                            onChange={handleChange}
                            error={!!errors.proposal_overview}
                            helperText={errors.proposal_overview ? errors.proposal_overview[0] : ''}
                            multiline
                            rows={4}
                            required
                        />
                        <TextField
                            label="Domain"
                            variant="outlined"
                            name="domain"
                            value={formData.domain}
                            onChange={handleChange}
                            error={!!errors.domain}
                            helperText={errors.domain ? errors.domain[0] : ''}
                            required
                        />
                        <TextField
                            label="Key Skill"
                            variant="outlined"
                            name="key_skill"
                            value={formData.key_skill}
                            onChange={handleChange}
                            error={!!errors.key_skill}
                            helperText={errors.key_skill ? errors.key_skill[0] : ''}
                            required
                        />
                        <TextField
                            label="Team Size"
                            variant="outlined"
                            name="team_size"
                            type="number"
                            value={formData.team_size}
                            onChange={handleChange}
                            error={!!errors.team_size}
                            helperText={errors.team_size ? errors.team_size[0] : ''}
                            required
                        />
                        <TextField
                            label="Partner One Name"
                            variant="outlined"
                            name="partner_one_name"
                            value={formData.partner_one_name}
                            onChange={handleChange}
                            error={!!errors.partner_one_name}
                            helperText={errors.partner_one_name ? errors.partner_one_name[0] : ''}
                            required
                        />
                        <TextField
                            label="Partner Two Name"
                            variant="outlined"
                            name="partner_two_name"
                            value={formData.partner_two_name}
                            onChange={handleChange}
                            error={!!errors.partner_two_name}
                            helperText={errors.partner_two_name ? errors.partner_two_name[0] : ''}
                        />
                        <TextField
                            label="Partner One Description"
                            variant="outlined"
                            name="partner_one_description"
                            value={formData.partner_one_description}
                            onChange={handleChange}
                            error={!!errors.partner_one_description}
                            helperText={errors.partner_one_description ? errors.partner_one_description[0] : ''}
                            multiline
                            rows={4}
                            required
                        />
                        <TextField
                            label="Partner Two Description"
                            variant="outlined"
                            name="partner_two_description"
                            value={formData.partner_two_description}
                            onChange={handleChange}
                            error={!!errors.partner_two_description}
                            helperText={errors.partner_two_description ? errors.partner_two_description[0] : ''}
                            multiline
                            rows={4}
                        />
                        <TextField
                            label="Proposal Due Date"
                            variant="outlined"
                            name="proposal_due_date"
                            type="date"
                            value={formData.proposal_due_date}
                            onChange={handleChange}
                            error={!!errors.proposal_due_date}
                            helperText={errors.proposal_due_date ? errors.proposal_due_date[0] : ''}
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="proposal_active"
                                    checked={formData.proposal_active}
                                    onChange={handleChange}
                                />
                            }
                            label="Proposal Active"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="proposal_completed"
                                    checked={formData.proposal_completed}
                                    onChange={handleChange}
                                />
                            }
                            label="Proposal Completed"
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </StyledPaper>
            </Container>
            <ToastContainer />

        </Root>
    );
};

export default Contribute;