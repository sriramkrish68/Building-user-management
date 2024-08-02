// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader, Typography, Divider, Grid, Box } from '@mui/material';
// import { getAnalytics } from '../services/api';

// const Analytics: React.FC = () => {
//   const [analytics, setAnalytics] = useState<any>({});

//   useEffect(() => {
//     const fetchAnalytics = async () => {
//       const response = await getAnalytics();
//       setAnalytics(response.data);
//     };
//     fetchAnalytics();
//   }, []);

//   // Round average duration to 2 decimal places
//   const averageDuration = analytics.averageDuration
//     ? analytics.averageDuration.toFixed(2)
//     : 'N/A';

//   return (
//     <Card variant="outlined" sx={{ height: '100%' }}>
//       <CardHeader title="Analytics" sx={{ backgroundColor: '#f5f5f5' }} />
//       <Divider />
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="body2" color="textSecondary">
//                 People Currently in Building
//               </Typography>
//               <Typography variant="h6" color="primary">
//                 {analytics.currentPeopleCount}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="body2" color="textSecondary">
//                 Average Duration of Stay
//               </Typography>
//               <Typography variant="h6" color="primary">
//                 {averageDuration} minutes
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="body2" color="textSecondary">
//                 Peak Entry Time
//               </Typography>
//               <Typography variant="h6" color="primary">
//                 {analytics.peakEntryTime}:00
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="body2" color="textSecondary">
//                 Peak Exit Time
//               </Typography>
//               <Typography variant="h6" color="primary">
//                 {analytics.peakExitTime}:00
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="body2" color="textSecondary">
//                 Most Frequently Used Entry Gate
//               </Typography>
//               <Typography variant="h6" color="primary">
//                 {analytics.mostUsedEntryGate}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="body2" color="textSecondary">
//                 Most Frequently Used Exit Gate
//               </Typography>
//               <Typography variant="h6" color="primary">
//                 {analytics.mostUsedExitGate}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default Analytics;







// new





import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Divider, Grid, Box } from '@mui/material';
import { getAnalytics } from '../services/api';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await getAnalytics();
      setAnalytics(response.data);
    };
    fetchAnalytics();
  }, []);

  const averageDuration = analytics.averageDuration
    ? analytics.averageDuration.toFixed(2)
    : 'N/A';

  const data = {
    labels: ['People Currently in Building', 'Average Duration of Stay', 'Peak Entry Time', 'Peak Exit Time', 'Most Used Entry Gate', 'Most Used Exit Gate'],
    datasets: [
      {
        label: 'Analytics Data',
        data: [
          analytics.currentPeopleCount,
          averageDuration,
          analytics.peakEntryTime,
          analytics.peakExitTime,
          analytics.mostUsedEntryGate,
          analytics.mostUsedExitGate,
        ],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#cc65fe',
          '#ffce56',
          '#4bc0c0',
          '#f779b8',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Building Entry Analytics',
      },
    },
  };

  return (
    <Card variant="outlined" sx={{ height: '100%', backgroundColor: '#fafafa', borderRadius: 3, boxShadow: 3 }}>
      <CardHeader title="Analytics" sx={{ backgroundColor: '#673ab7', color: '#fff', textAlign: 'center' }} />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="body2" color="textSecondary">
                People Currently in Building
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.currentPeopleCount}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Average Duration of Stay
              </Typography>
              <Typography variant="h6" color="primary">
                {averageDuration} minutes
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Peak Entry Time
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.peakEntryTime}:00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Peak Exit Time
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.peakExitTime}:00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Most Frequently Used Entry Gate
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.mostUsedEntryGate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Most Frequently Used Exit Gate
              </Typography>
              <Typography variant="h6" color="primary">
                {analytics.mostUsedExitGate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 1 }}>
              <Bar data={data} options={options} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Analytics;


