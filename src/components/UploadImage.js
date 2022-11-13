import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { Button } from "@mui/material";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LinearProgress from "@mui/material/LinearProgress";

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            allowZoomOut: false,
            borderRadius: 50,
            preview: null,
            width: 330,
            height: 330,
            percent: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNewImage = (e) => {
        this.setState({ image: e.target.files[0] });
    };

    async handleSubmit(e) {
        if (this.state.image) {
            // console.log(img)
            // console.log(this.state.image)
            const storageRef = ref(storage, `/files/${this.state.image.name}`);
            // console.log(storage)
            const uploadTask = uploadBytesResumable(storageRef, this.state.image);
            // console.log(uploadTask)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
         
                    // update progress
                    this.setState({ percent: percent });
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                        this.props.handleNewUserImage(url);
                    });
                }
            ); 
            // this.setState({ image: "" })
        } else {
            alert("Please choose a file first!")
        }
    }

    render() {
        return (
            <div>
                <div>
                    <ReactAvatarEditor
                        width={this.state.width}
                        height={this.state.height}
                        borderRadius={this.state.width / (100 / this.state.borderRadius)}
                        image={this.state.image}
                        color={[255, 255, 255, 0.6]}
                        className="editor-canvas"
                    />
                </div>
                <br />
                <label>
                    <input
                        name="upload-img-input"
                        accept="image/*"
                        type="file"
                        onChange={this.handleNewImage}
                    />
                </label>
                <br />
                <div>
                    <Button
                        type="submit"
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={this.handleSubmit}
                    >
                        Confirm
                    </Button>
                    {/* <p>{this.state.percent} % done</p> */}
                    {(this.state.percent !== 0 && this.state.percent !== 100) && <LinearProgress variant="determinate" value={this.state.percent} />}
                </div>
            </div>
        )
    }
}
export default UploadImage;