import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import kpmgTheme from '../theme/kpmgTheme'; // Adjust the path as necessary

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150, editable: true },
    { field: 'description', headerName: 'Description', width: 300, editable: true },
    { field: 'dueDate', headerName: 'Due Date', width: 150, editable: true },
    { field: 'proposedBy', headerName: 'Proposed By', width: 150, editable: true },
    { field: 'skillSets', headerName: 'Skill Sets', width: 200, editable: true },
    { field: 'isActive', headerName: 'Active', width: 200, editable: true },

];

const proposals = [
    { id: 1, title: 'Proposal 1', description: 'Description 1', dueDate: '2023-12-01', proposedBy: 'User A', skillSets: 'Skill 1, Skill 2',isActive:true },
    { id: 2, title: 'Proposal 2', description: 'Description 2', dueDate: '2023-12-02', proposedBy: 'User B', skillSets: 'Skill 3, Skill 4' ,isActive:true},
    { id: 3, title: 'Proposal 3', description: 'Description 3', dueDate: '2023-12-03', proposedBy: 'User C', skillSets: 'Skill 5, Skill 6' ,isActive:false},

]

const Home = () => {
    const navigate = useNavigate();

    const handleRowClick = (params) => {
        navigate(`/proposal/${params.id}`);
    };

    return (
        <ThemeProvider theme={kpmgTheme}>
        <CssBaseline />
        <Container className="mt-4">
            <Typography variant="h5" gutterBottom align="left" sx={{ marginBottom: '20px' }}>
                Proposals
            </Typography>
            <div style={{ height: 600, width: '100%', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '20px' }}>
                <DataGrid
                    rows={proposals}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                    filterModel={{
                        items: [
                            { columnField: 'title', operatorValue: 'contains', value: '' },
                        ],
                    }}
                    sx={{
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#1976d2',
                            color: '#ddddd',
                            fontSize: '16px',
                        },
                        '& .MuiDataGrid-row': {
                            backgroundColor: '#fff',
                            '&:nth-of-type(odd)': {
                                backgroundColor: '#f9f9f9',
                            },
                        },
                        '& .MuiDataGrid-cell': {
                            padding: '10px',
                        },
                    }}
                />
            </div>
        </Container>
    </ThemeProvider>
    );
}

export default Home;
