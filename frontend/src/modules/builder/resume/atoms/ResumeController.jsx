import Tooltip from '@mui/material/Tooltip';

const ResumeController = ({
  zoomIn,
  zoomOut,
  resetZoom,
}) => {
  return (
    <div className="flex">
      <div className="flex items-center gap-5">
        <TooltipRenderer title="Zoom out">
          <img
            src="/icons/zoom-out.svg"
            className="cursor-pointer"
            alt="Zoom out"
            width="24"
            height="24"
            onClick={zoomOut}
          />
        </TooltipRenderer>
        <TooltipRenderer title="Zoom in">
          <img
            src="/icons/zoom-in.svg"
            className="cursor-pointer"
            alt="Zoom in"
            width="24"
            height="24"
            onClick={zoomIn}
          />
        </TooltipRenderer>
        <TooltipRenderer title="Reset zoom">
          <img
            src="/icons/reset-zoom.svg"
            className="cursor-pointer"
            alt="Reset zoom"
            width="24"
            height="24"
            onClick={resetZoom}
          />
        </TooltipRenderer>
      </div>
    </div>
  );
};

export default ResumeController;

function TooltipRenderer({ title, children }) {
  return (
    <Tooltip title={title}>
      <div className="w-auto h-auto flex">{children}</div>
    </Tooltip>
  );
}
