// import {
//   Container,
//   Typography,
//   Box,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   CircularProgress,
//   Button
// } from '@mui/material'

// import './App.css'
// import { useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [emailContent, setEmailContent] = useState('')
//   const [tone, setTone] = useState('')
//   const [generatedReply, setGeneratedReply] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async () => {
//     setLoading(true)

//     try {
//       // Bhai yahan dhyan se dekho, localhost hata kar Render ka URL daal diya hai
//       const response = await axios.post(
//         "https://email-writer-backend-h4up.onrender.com/api/email/generate",
//         {
//           emailContent,
//           tone
//         }
//       )

//       setGeneratedReply(
//         typeof response.data === 'string'
//           ? response.data
//           : JSON.stringify(response.data)
//       )

//     } catch (error) {
//       console.error(error)
//       setGeneratedReply("Error generating reply")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Typography variant="h3" gutterBottom>
//         Email Reply Generator
//       </Typography>

//       <Box sx={{ mx: 3 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={6}
//           label="Original Email Content"
//           value={emailContent}
//           onChange={(e) => setEmailContent(e.target.value)}
//         />

//         <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
//           <InputLabel>Tone (Optional)</InputLabel>

//           <Select
//             value={tone}
//             label="Tone (Optional)"
//             onChange={(e) => setTone(e.target.value)}
//           >
//             <MenuItem value="">None</MenuItem>
//             <MenuItem value="professional">Professional</MenuItem>
//             <MenuItem value="casual">Casual</MenuItem>
//             <MenuItem value="friendly">Friendly</MenuItem>
//           </Select>
//         </FormControl>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           disabled={!emailContent || loading}
//         >
//           {loading ? (
//             <CircularProgress size={24} color="inherit" />
//           ) : (
//             'Generate Reply'
//           )}
//         </Button>
//       </Box>

//       <Box sx={{ mx: 3, mt: 3 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={6}
//           value={generatedReply}
//           slotProps={{
//             input: {
//               readOnly: true
//             }
//           }}
//         />

//         <Button
//           variant="outlined"
//           onClick={() => navigator.clipboard.writeText(generatedReply)}
//           sx={{ mt: 1 }}
//         >
//           Copy to Clipboard
//         </Button>
//       </Box>
//     </Container>
//   )
// }

// export default App

// from here




import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Button,
  Paper
} from '@mui/material'

import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [emailContent, setEmailContent] = useState('')
  const [tone, setTone] = useState('')
  const [generatedReply, setGeneratedReply] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)

    try {
      const response = await axios.post(
        "https://email-writer-backend-h4up.onrender.com/api/email/generate",
        {
          emailContent,
          tone
        }
      )

      setGeneratedReply(
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data)
      )

    } catch (error) {
      console.error(error)
      setGeneratedReply("Error generating reply")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 5
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 5,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white'
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 4
            }}
          >
           Email Reply Generator
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={6}
            label="Original Email Content"
            variant="filled"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{
              mb: 3,
              background: 'rgba(255,255,255,0.9)',
              borderRadius: 2
            }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel
              sx={{ color: '#000000' }}
            >
              Select Tone
            </InputLabel>

            <Select
              value={tone}
              label="Tone"
              onChange={(e) => setTone(e.target.value)}
              sx={{
                background: 'rgba(255,255,255,0.9)',
                borderRadius: 2
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">
                Professional
              </MenuItem>
              <MenuItem value="casual">
                Casual
              </MenuItem>
              <MenuItem value="friendly">
                Friendly
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            sx={{
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: 3,
              background:
                'linear-gradient(90deg,#ff8a00,#e52e71)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
              }
            }}
          >
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              'Generate Reply'
            )}
          </Button>

          {generatedReply && (
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 'bold'
                }}
              >
                Generated Reply
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={6}
                value={generatedReply}
                variant="filled"
                sx={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: 2
                }}
                slotProps={{
                  input: {
                    readOnly: true
                  }
                }}
              />

              <Button
                variant="outlined"
                onClick={() =>
                  navigator.clipboard.writeText(
                    generatedReply
                  )
                }
                sx={{
                  mt: 2,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    background:
                      'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  )
}

export default App