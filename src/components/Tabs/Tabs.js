import { useState } from "react";
import TodoEdit from '../Todos/TodoEdit'
import Tab from "./Tab";
import styles from "./Tabs.module.css"

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={activeTab === index ? styles.active : styles.tab}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}

            </div>
            <div className={styles.tabContent}>
                {tabs[activeTab].map(tab => {
                    return 'completed' in tab
                        ? <TodoEdit className="listLink" value={tab.title} key={tab.id} url={`todos/${tab.id}`} completed={tab.completed} />
                        : <Tab key={tab.id} {...tab} />
                })}
            </div>
        </div>
    );
};

export default Tabs;