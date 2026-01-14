import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "../components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, subtitle, image, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name || "Text File"}</h2>
            </div>

            <div className="p-8 space-y-5 max-h-[70vh] overflow-y-auto">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-32 h-32 rounded-lg object-cover mx-auto"
                        loading="lazy"
                    />
                )}

                {subtitle && (
                    <h3 className="text-lg font-semibold text-gray-700">
                        {subtitle}
                    </h3>
                )}

                {description && description.length > 0 && (
                    <div className="space-y-4">
                        {description.map((paragraph, index) => (
                            <p key={index} className="text-sm text-gray-600 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
