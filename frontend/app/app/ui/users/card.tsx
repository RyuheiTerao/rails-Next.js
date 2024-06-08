import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function CardInfo() {
  const [notes, setNotes] = useState({})

  return(
    <Card>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
        <CardDescription>Add notes to your calendar events.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {Object.entries(notes).map(([date, note]) => (
          <div key={date} className="grid gap-1">
            <div className="font-medium">
              {new Intl.DateTimeFormat("default", { dateStyle: "medium" }).format(new Date(date))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{note}</div>
        </div>
      ))}
      </CardContent>
    </Card>
  );
}
