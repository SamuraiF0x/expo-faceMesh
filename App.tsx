import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FaceModel from "@tensorflow-models/face-landmarks-detection";
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import { Camera, CameraType } from "expo-camera";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [modelReady, setModelReady] = useState<FaceModel.FaceLandmarksDetector>();
	const TensorCamera = cameraWithTensors(Camera);

	useEffect(() => {
		(async () => {
			await tf.ready();

			const model = FaceModel.SupportedModels.MediaPipeFaceMesh;
			const detectorConfig: FaceModel.MediaPipeFaceMeshMediaPipeModelConfig = {
				runtime: "mediapipe",
				maxFaces: 1,
				refineLandmarks: true,
				solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
			};

			setModelReady(await FaceModel.createDetector(model, detectorConfig));

			console.log(tf.getBackend());
			console.log("READY!!!");
		})();
	}, []);

	const handleImage = (images: IterableIterator<tf.Tensor3D>) => {
		const loop = async () => {
			const nextImageTensor = images.next().value;
			const result = await modelReady?.estimateFaces(nextImageTensor);
			console.log(result);
			tf.dispose([nextImageTensor]);

			requestAnimationFrame(loop);
		};
		loop();
	};

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
			{modelReady && (
				<TensorCamera
					style={{ height: 200, width: 200 }}
					type={CameraType.front}
					onReady={handleImage}
					cameraTextureHeight={1080}
					cameraTextureWidth={1920}
					resizeHeight={200}
					resizeWidth={152}
					resizeDepth={3}
					autorender={true}
					useCustomShadersToResize={false}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
