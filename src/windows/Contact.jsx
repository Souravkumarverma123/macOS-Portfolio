import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="contact" />
        <h2>Conact Me</h2>
    </div>

    <div className="p-5 space-y-5">
        <img src="/images/sourav.png" 
        alt="Sourav" 
        className="w-20 rounded-full"/>

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to fix ? or just want to chat? I am always open for new opportunities. </p>
        <p>email:- souravkumarverma56@gmail.com</p>

        <ul>
            {socials.map(({id, bg, link, icon , text }) => (
                <li key={id} style={{background:bg}}>
                    <a href={link} target="_blank" rel="noreferrer noopener" title={text}>
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;