// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography, List, ListItem } from '@mui/material';
// import { getHistory } from '../services/api';

// const History: React.FC = () => {
//   const [personId, setPersonId] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [history, setHistory] = useState<any[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await getHistory(personId, startDate, endDate);
//       setHistory(response.data);
//     } catch (error) {
//       console.error('Error fetching history:', error);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h6" gutterBottom>
//         History
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         <TextField
//           label="Person ID"
//           value={personId}
//           onChange={(e) => setPersonId(e.target.value)}
//           required
//         />
//         <TextField
//           type="date"
//           label="Start Date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           required
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           type="date"
//           label="End Date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           required
//           InputLabelProps={{ shrink: true }}
//         />
//         <Button variant="contained" type="submit">
//           Submit
//         </Button>
//       </Box>
//       <List>
//         {history.length > 0 ? (
//           history.map((event: any) => (
//             <ListItem key={event._id}>
//               {`${event.personId} - ${event.gate} - ${event.timestamp} - ${event.type}`}
//             </ListItem>
//           ))
//         ) : (
//           <Typography>No history found</Typography>
//         )}
//       </List>
//     </Box>
//   );
// };

// export default History;

















//new

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, List, ListItem, Paper } from '@mui/material';
import { getHistory } from '../services/api';

const History: React.FC = () => {
  const [personId, setPersonId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [history, setHistory] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await getHistory(personId, startDate, endDate);
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #E0E0E0, #BDBDBD)', padding: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
        History
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Person ID"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
          required
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <TextField
          type="date"
          label="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <TextField
          type="date"
          label="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <Button variant="contained" type="submit" sx={{ backgroundColor: '#2196F3', '&:hover': { backgroundColor: '#1976D2' } }}>
          Submit
        </Button>
      </Box>
      <Paper sx={{ maxHeight: 300, overflow: 'auto', marginTop: 2, backgroundColor: '#fff', borderRadius: 1 }}>
        <List>
          {history.length > 0 ? (
            history.map((event: any) => (
              <ListItem key={event._id} sx={{ borderBottom: '1px solid #ddd' }}>
                {`${event.personId} - ${event.gate} - ${event.timestamp} - ${event.type}`}
              </ListItem>
            ))
          ) : (
            <Typography>No history found</Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default History;

