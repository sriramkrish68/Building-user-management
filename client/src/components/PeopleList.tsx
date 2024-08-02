// import React, { useEffect, useState } from 'react';
// import { Typography, CircularProgress, Box, List, ListItem, Paper } from '@mui/material';
// import { getPeople } from '../services/api';

// const PeopleList: React.FC = () => {
//   const [people, setPeople] = useState<string[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPeople = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await getPeople();
//         setPeople(response.data);
//       } catch (error) {
//         setError('Error fetching people');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPeople();
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h6" gutterBottom>
//         People Currently Inside
//       </Typography>
//       {loading && <CircularProgress />}
//       {error && <Typography color="error">{error}</Typography>}
//       <Paper style={{ maxHeight: 250, overflow: 'auto', padding: 2 }}>
//         <List>
//           {people.length > 0 ? (
//             people.slice(0, 7).map((person, index) => (
//               <ListItem key={index} divider>
//                 {person}
//               </ListItem>
//             ))
//           ) : (
//             <Typography>No people inside</Typography>
//           )}
//           {people.length > 7 && (
//             <Box sx={{ height: '150px', overflowY: 'auto' }}>
//               <List>
//                 {people.slice(7).map((person, index) => (
//                   <ListItem key={index + 7} divider>
//                     {person}
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>
//           )}
//         </List>
//       </Paper>
//     </Box>
//   );
// };

// export default PeopleList;

























import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box, List, ListItem, Paper } from '@mui/material';
import { getPeople } from '../services/api';

const PeopleList: React.FC = () => {
  const [people, setPeople] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getPeople();
        setPeople(response.data);
      } catch (error) {
        setError('Error fetching people');
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #E0F7FA, #80DEEA)', padding: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>
        People Currently Inside
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      <Paper sx={{ maxHeight: 250, overflow: 'auto', padding: 2, backgroundColor: '#fff', borderRadius: 1, boxShadow: 2 }}>
        <List>
          {people.length > 0 ? (
            people.slice(0, 7).map((person, index) => (
              <ListItem key={index} divider>
                {person}
              </ListItem>
            ))
          ) : (
            <Typography>No people inside</Typography>
          )}
          {people.length > 7 && (
            <Box sx={{ height: '150px', overflowY: 'auto' }}>
              <List>
                {people.slice(7).map((person, index) => (
                  <ListItem key={index + 7} divider>
                    {person}
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default PeopleList;



