import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function JulyCalendar() {
  // July 2025 - starts on Tuesday (day 2), has 31 days
  const daysInMonth = 31;
  const firstDayOfMonth = 2; // Tuesday (0 = Sunday, 1 = Monday, 2 = Tuesday, etc.)
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generate array of dates for July 2025
  const generateCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  return (
    <Card className="bg-blue-600 border-blue-700 shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-white text-2xl">July 2025</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-white/90 p-2">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center text-white
                ${day ? 'hover:bg-blue-500 hover:bg-opacity-50 rounded-md cursor-pointer transition-colors' : ''}
              `}
            >
              {day}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}