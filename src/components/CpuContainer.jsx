import CpuCore from '../components/CpuCore.jsx';

export default function CpuContainer({power=0, effeciency=0, throttle=false, 
    activeCount=0, executionTime=0, ...rest}) {
    const MAX_CORES = 8;
    const coresList = [];

    for (let j = 0; j < MAX_CORES; j ++) {
        coresList.push(<CpuCore client:load id={j} throttle={throttle} active={j < activeCount}/>)
    }

    const warningMsg = !throttle ? <></> : <div style={styles.throttle}>
                THERMAL THROTTLING DETECTED!
            </div>

    return <>
        {/* Main container */}
        <div style={styles.container}>
            {/* Cpu Cores */}
            <div style={styles.cores}>
                { coresList }            
            </div>

            {/* Actual Power Label */}
            <div style={{...styles.label, ...styles.power}}>
                Actual Power: {power.toFixed(1)}W
            </div>

            {/* Effeciency Label */}
            <div style={{...styles.label, ...styles.effeciency}}>
                Effeciency: {effeciency}%
            </div>

            {/* Throttling Message */}
            {warningMsg}
            
        </div>
    </>;
}

const styles = {
    container: {
        position: "relative",
        padding: "32px"
    },
    cores: {
        minWidth: "664px",
        maxWidth: "800px",
        border: "6px solid black",
        borderRadius: "24px",
        padding: '24px 32px',          
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", 
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "20px",              
        backgroundColor: "#ffffff",
    },
    throttle: {
        position: "absolute",
        fontSize: "1.75rem",
        fontWeight: "bold",
        color: "#e34a4a",
        left: "0px",
        top: "-12px"
    },
    label: {
        width: "fit-content",
        border: "3px solid black",
        borderRadius: "16px",
        padding: "8px 16px",
        fontSize: "1rem",
        position: "absolute",
        backgroundColor: "#ffffff",
        fontWeight: "600"
    },
    power: {
        top: "0px",
        right: "0px"
    },
    effeciency: {
        bottom: "8px",
        left: "0px"
    }
};