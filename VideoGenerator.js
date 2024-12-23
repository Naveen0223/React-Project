const generateVideo = async () => {
    if (!image1 || !image2) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);

    try {
        const response = await axios.post('YOUR_RUNWAY_API_ENDPOINT', formData, {
            headers: {
                'Authorization': `Bearer YOUR_API_KEY`,
                'Content-Type': 'multipart/form-data',
            },
        });

        // Assuming the response contains the video URL
        setVideoUrl(response.data.videoUrl);
    } catch (error) {
        console.error('Error generating video:', error);
    } }