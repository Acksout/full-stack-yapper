import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
    return (
        <div className="flex overflow-hidden rounded-lg bg-gray-400 sm:h-[450px] md:h-[550px]">
            <Sidebar/>
            <MessageContainer/>
        </div>
    );
};
export default Home;
