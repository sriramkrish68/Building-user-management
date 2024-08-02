import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import EntryExitForm from './components/EntryExitForm';
import PeopleList from './components/PeopleList';
import History from './components/History';
import Analytics from './components/Analytics';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          backgroundColor: '#e3f2fd',
          padding: 2,
          borderRadius: 1,
          textAlign: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: '#1976d2' }}
        >
          Building Entry System
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <EntryExitForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <PeopleList />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <History />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Analytics />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;



//new

// import React from 'react';
// import { Container, Typography, Box, Grid, Paper } from '@mui/material';
// import EntryExitForm from './components/EntryExitForm';
// import PeopleList from './components/PeopleList';
// import History from './components/History';
// import Analytics from './components/Analytics';

// const App: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         // Gradient background from pink to white
//         background: 'linear-gradient(to bottom, #ff8a80, #ffab91, #ffffff)',
//         minHeight: '100vh',
//         padding: 2,
//       }}
//     >
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <Box
//           sx={{
//             backgroundColor: '#ffffff',
//             padding: 2,
//             borderRadius: 2,
//             boxShadow: 3,
//             textAlign: 'center',
//             mb: 3,
//             position: 'relative',
//             overflow: 'hidden',
//           }}
//         >
//           <Typography
//             variant="h4"
//             component="h1"
//             gutterBottom
//             sx={{ color: '#d32f2f', fontFamily: 'Roboto, sans-serif' }}
//           >
//             Building Entry System
//           </Typography>
//           {/* Decorative elements */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 0,
//               right: 0,
//               width: '200px',
//               height: '200px',
//               background: 'rgba(255, 105, 180, 0.2)',
//               borderRadius: '50%',
//               transform: 'rotate(-30deg)',
//             }}
//           />
//           <Box
//             sx={{
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               width: '200px',
//               height: '200px',
//               background: 'rgba(255, 105, 180, 0.2)',
//               borderRadius: '50%',
//               transform: 'rotate(30deg)',
//             }}
//           />
//         </Box>
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: '#ffffff',
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   minHeight: '200px',
//                 }}
//               >
//                 <EntryExitForm />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: '#ffffff',
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   minHeight: '200px',
//                 }}
//               >
//                 <PeopleList />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: '#ffffff',
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   minHeight: '200px',
//                 }}
//               >
//                 <History />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: '#ffffff',
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   minHeight: '200px',
//                 }}
//               >
//                 <Analytics />
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default App;
