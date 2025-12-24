"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  // 1. Logic cũ khiến UI bị nhấp nháy hoặc hiển thị sai
  // const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  // SỬA ĐỔI: Sử dụng range trực tiếp từ context, vì ta sẽ chặn dữ liệu sai ngay từ lúc chọn
  const displayRange = range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(range.to, range.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  // 2. THÊM HÀM XỬ LÝ LOGIC CHỌN NGÀY
  const handleSelect = (selectedRange) => {
    // Trường hợp 1: Người dùng click vào ngày đã chọn để bỏ chọn (selectedRange có thể là undefined)
    if (!selectedRange) {
      setRange({ from: undefined, to: undefined });
      return;
    }

    // Trường hợp 2: Đã chọn cả ngày bắt đầu và ngày kết thúc
    if (selectedRange.from && selectedRange.to) {
      // Kiểm tra xem khoảng thời gian này có chứa ngày đã book không
      if (isAlreadyBooked(selectedRange, bookedDates)) {
        // Nếu bị dính lịch đã book -> Chỉ giữ lại ngày bắt đầu, hủy ngày kết thúc
        setRange({ from: selectedRange.from, to: undefined });
      } else {
        // Nếu hợp lệ -> Set range bình thường
        setRange(selectedRange);
      }
    } else {
      // Trường hợp 3: Chỉ mới chọn ngày bắt đầu
      setRange(selectedRange);
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        // 3. SỬA PROP onSelect GỌI HÀM MỚI VIẾT
        onSelect={handleSelect}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
