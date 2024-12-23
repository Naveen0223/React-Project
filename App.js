import React, { useState } from 'react';
import { Container, Typography, Button, Box, Card, CardMedia, CircularProgress } from '@mui/material';

const App = () => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleGenerateVideo = () => {
        setLoading(true);
        setVideoPlaying(false);
        setTimeout(() => {
            setLoading(false);
            setVideoPlaying(true);
        }, 50); // Simulate video generation delay
    };

    return (
        <Container style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white', padding: '20px' }}>
            <Typography variant="h4" gutterBottom align="center">
                AI Video Generator
            </Typography>
            <Box mb={2} display="flex" justifyContent="center">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setImage1)}
                    style={{ marginRight: '10px', display: 'none' }}
                    id="upload-image-1"
                />
                <label htmlFor="upload-image-1">
                    <Button variant="contained" component="span" color="primary">
                        Upload Image 1
                    </Button>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setImage2)}
                    style={{ display: 'none' }}
                    id="upload-image-2"
                />
                <label htmlFor="upload-image-2">
                    <Button variant="contained" component="span" color="primary">
                        Upload Image 2
                    </Button>
                </label>
            </Box>

            {/* Display images below the upload buttons */}
            <Box display="flex" justifyContent="space-around" mb={2}>
                {image1 && (
                    <Card style={{ width: '300px', margin: '10px', backgroundColor: '#1e1e1e' }}>
                        <CardMedia component="img" image={image1} alt="Uploaded 1" />
                        <Typography variant="h6" align="center">Uploaded Image 1</Typography>
                    </Card>
                )}
                {image2 && (
                    <Card style={{ width: '300px', margin: '10px', backgroundColor: '#1e1e1e' }}>
                        <CardMedia component="img" image={image2} alt="Uploaded 2" />
                        <Typography variant="h6" align="center">Uploaded Image 2</Typography>
                    </Card>
                )}
            </Box>

            {/* Generate Video Button */}
            <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <Button
                    variant="contained"
                    onClick={handleGenerateVideo}
                    color="secondary"
                    disabled={!image1 || !image2 || loading}
                    style={{ marginRight: '20px' }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Video'}
                </Button>

                {/* Video Display */}
                {videoPlaying && (
                    <Box>
                        <Typography variant="h6">Generated Video</Typography>
                        <video width="600" controls autoPlay>
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default App;