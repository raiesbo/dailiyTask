

export function DayCard({ item, id }) {

    console.log(typeof (item))

    return (
        <div key={id} className="cal-card">
            {`
                ${item.getDate()} ${item.getMonth()} ${item.getFullYear()}
            `
            }
            {
                item.toDateString()
            }
        </div>
    )
}