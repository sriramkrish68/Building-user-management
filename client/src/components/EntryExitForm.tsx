// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography } from '@mui/material';
// import { registerEntry, registerExit } from '../services/api';

// const EntryExitForm: React.FC = () => {
//   const [personId, setPersonId] = useState('');
//   const [gate, setGate] = useState('');
//   const [type, setType] = useState<'entry' | 'exit'>('entry');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (type === 'entry') {
//       await registerEntry(personId, gate);
//     } else {
//       await registerExit(personId, gate);
//     }
//     setPersonId('');
//     setGate('');
//   };

//   return (
//     <Box>
//       <Typography variant="h6" gutterBottom>
//         Entry/Exit Form
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         <TextField
//           label="Person ID"
//           value={personId}
//           onChange={(e) => setPersonId(e.target.value)}
//           required
//         />
//         <TextField
//           label="Gate"
//           value={gate}
//           onChange={(e) => setGate(e.target.value)}
//           required
//         />
//         <FormControl>
//           <InputLabel></InputLabel>
//           <Select value={type} onChange={(e) => setType(e.target.value as 'entry' | 'exit')}>
//             <MenuItem value="entry">Entry</MenuItem>
//             <MenuItem value="exit">Exit</MenuItem>
//           </Select>
//         </FormControl>
//         <Button variant="contained" type="submit">
//           Submit
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default EntryExitForm;



















//new

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { registerEntry, registerExit } from '../services/api';

const EntryExitForm: React.FC = () => {
  const [name, setName] = useState('');
  const [gate, setGate] = useState('');
  const [error, setError] = useState('');

  const handleEntry = async () => {
    setError('');
    try {
      await registerEntry(name, gate);
      alert('Entry registered successfully');
    } catch (err) {
      setError('Failed to register entry');
    }
  };

  const handleExit = async () => {
    setError('');
    try {
      await registerExit(name, gate);
      alert('Exit registered successfully');
    } catch (err) {
      setError('Failed to register exit');
    }
  };

  return (
    <Container>
      <Box sx={{ background: 'linear-gradient(135deg, #FFB6C1, #FF69B4)', padding: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
          Register Entry/Exit
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            label="Gate"
            value={gate}
            onChange={(e) => setGate(e.target.value)}
            required
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleEntry}
              sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#388E3C' } }}
            >
              Register Entry
            </Button>
            <Button
              variant="contained"
              onClick={handleExit}
              sx={{ backgroundColor: '#F44336', '&:hover': { backgroundColor: '#D32F2F' } }}
            >
              Register Exit
            </Button>
          </Box>
          {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default EntryExitForm;


