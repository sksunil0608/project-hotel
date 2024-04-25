export default function calculateTimeDifference(toTime: string, fromTime: string): number | null {
    // Parse hours and minutes from the time strings
    const toHour = parseInt(toTime.substring(0, 2), 10);
    const toMinute = parseInt(toTime.substring(3), 10);
    const fromHour = parseInt(fromTime.substring(0, 2), 10);
    const fromMinute = parseInt(fromTime.substring(3), 10);

    // Validate the parsed values
    if (isNaN(toHour) || isNaN(toMinute) || isNaN(fromHour) || isNaN(fromMinute)) {
        console.error("Invalid time format. Use 'HH:mm'.");
        return null;
    }

    // Convert times to total minutes from midnight
    const totalToMinutes = toHour * 60 + toMinute;
    const totalFromMinutes = fromHour * 60 + fromMinute;

    // Calculate the difference in minutes
    const differenceInMinutes = totalToMinutes - totalFromMinutes;

    if (differenceInMinutes < 0) {
        console.error("End time cannot be earlier than start time.");
        return null;
    }

    // Calculate hours and remaining minutes
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    // Format the time difference as a string
    const formattedDifference = `${hours} hours ${minutes} minutes`;

    return Math.round(hours);
}