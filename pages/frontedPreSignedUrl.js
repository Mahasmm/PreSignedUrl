document.getElementById('presignedUrlBtn').addEventListener('click', () => {
	const presignedUrl_fileInput = document.getElementById('presignedUrl');
	const file = presignedUrl_fileInput.files[0];
	const fileName = file.name;

	//    const url = 'https://7103whbee2.execute-api.us-east-1.amazonaws.com/dev/getSignedUrl';
          const url = 'https://ks3661yhqe.execute-api.us-east-1.amazonaws.com/dev/getSignedUrl'


	axios
		.post(url, { fileName: fileName })
		.then((res) => {
			console.log(res);
			const url = res.data.preSignedUrl;
			axios.put(url, file).then((res) => console.log(res)).catch((err) => console.error(err));
		})
		.catch((err) => {
			console.error(err);
		});
});
