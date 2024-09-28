// theme/kpmgTheme.js
import { createTheme } from '@mui/material/styles';

const kpmgTheme = createTheme({
    palette: {
        primary: {
            main: '#00338D', // KPMG blue
        },
        secondary: {
            main: '#72C3E2', // KPMG light blue
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: '1px solid #00338D',
                },
                columnHeaders: {
                    backgroundColor: '#00338D',
                    color: '#00000',
                    fontWeight: 'bold',
                },
                cell: {
                    borderBottom: '1px solid #00338D',
                },
            },
        },
    },
});

export default kpmgTheme;