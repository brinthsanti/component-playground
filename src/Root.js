import { Routes, Route } from "react-router-dom";
import Button from './examples/Button'
import Grid from './examples/Grid'
import Layout from './examples/Layout';
import BreadcrumbExamples from './examples/Breadcrumb';
import DropdownExamples from './examples/Dropdown';
import Menu from './examples/Menu';
import PaginationExample from './examples/Pagination';
import StepsExample from './examples/Stepper';
import AutoCompleteExamples from './examples/AutoComplete';
import SelectExamples from './examples/Select';
import RateExamples from './examples/Rate';
import SliderExamples from './examples/Slider';
import CarouselExamples from './examples/Carousel';
import CollapseExamples from './examples/Collapse';
import TabsExamples from './examples/Tabs';
import ModalExamples from './examples/Modal';
import ProgressExamples from './examples/Progress';
import DrawerExamples from './examples/Drawer';
import TooltipExamples from './examples/Tooltip';
import NotificationExamples from './examples/Notification';
import TimelineExamples from './examples/Timeline';
import FileExplorerExamples from './examples/FileExplorer';
import InfiniteScrollerExamples from './examples/InfiniteScroller';
import StopwatchExamples from './examples/Stopwatch';
import TimerExamples from './examples/Timer';
import CommentBoxExample from './examples/CommentBox';
import CalendarExample from './examples/Calendar';
import TictacktoeExamples from './examples/Tictacktoe';
import App from './App';
import NestedCheckboxExamples from "./examples/NestedCheckbox";
import ScrollerExamples from "./examples/Scroller";
import ShowMoreExamples from "./examples/ShowMore";

function Root() {
    return (
        <Routes>
            <Route path="/button" element={<Button />} />
            <Route path="/breadcrumb" element={<BreadcrumbExamples />} />
            <Route path="/dropdown" element={<DropdownExamples />} />
            <Route path="/layout" element={<Layout />} />
            <Route path='/grid' element={<Grid />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/showmore" element={<ShowMoreExamples />} />
            <Route path="/pagination" element={<PaginationExample />} />
            <Route path="/infinite-scroller" element={<InfiniteScrollerExamples />} />
            <Route path="/stepper" element={<StepsExample />} />
            <Route path="/autocomplete" element={<AutoCompleteExamples />} />
            <Route path="/select" element={<SelectExamples />} />
            <Route path="/rate" element={<RateExamples />} />
            <Route path="/slider" element={<SliderExamples />} />
            <Route path="/carousel" element={<CarouselExamples />} />
            <Route path="/collapse" element={<CollapseExamples />} />
            <Route path="/tabs" element={<TabsExamples />} />
            <Route path="/modal" element={<ModalExamples />} />
            <Route path="/progress" element={<ProgressExamples />} />
            <Route path="/drawer" element={<DrawerExamples />} />
            <Route path="/tooltip" element={<TooltipExamples />} />
            <Route path="/notification" element={<NotificationExamples />} />
            <Route path="/timeline" element={<TimelineExamples />} />
            <Route path="/file-explorer" element={<FileExplorerExamples />} />
            <Route path="/stopwatch" element={<StopwatchExamples />} />
            <Route path="/timer" element={<TimerExamples />} />
            <Route path="/comment-box" element={<CommentBoxExample />} />
            <Route path="/calendar" element={<CalendarExample />} />
            <Route path='/tictacktoe' element={<TictacktoeExamples />} />
            <Route path='/nestedcheckboxes' element={<NestedCheckboxExamples />} />
            <Route path='scroller' element={<ScrollerExamples/>} />
            <Route path="/" element={<App />} />
        </Routes>
    );
}

export default Root;
