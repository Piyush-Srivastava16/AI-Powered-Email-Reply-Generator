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
  Button
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
        "http://localhost:8080/api/email/generate",
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />

        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>

          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Generate Reply'
          )}
        </Button>
      </Box>

      <Box sx={{ mx: 3, mt: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          value={generatedReply}
          slotProps={{
            input: {
              readOnly: true
            }
          }}
        />

        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(generatedReply)}
          sx={{ mt: 1 }}
        >
          Copy to Clipboard
        </Button>
      </Box>
    </Container>
  )
}

export default App