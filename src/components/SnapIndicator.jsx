import useSnapStore from '#store/snap';

const SnapIndicator = () => {
    const { snapZone } = useSnapStore();

    if (!snapZone) return null;

    const positionClasses = {
        left: 'left-0 top-0 w-1/2 h-full',
        right: 'right-0 top-0 w-1/2 h-full',
        top: 'left-0 top-0 w-full h-full',
    };

    return (
        <div className={`snap-indicator ${positionClasses[snapZone]}`} />
    );
};

export default SnapIndicator;
