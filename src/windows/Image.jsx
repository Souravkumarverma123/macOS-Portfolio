import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "../components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p>{name || "Image"}</p>
            </div>

            <div className="preview">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={name || "Image preview"}
                        loading="lazy"
                    />
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
