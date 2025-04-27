import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"


function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Cambiar a modo oscuro o claro">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Change Mode Theme</span>
        </Button>
    )
}

function useLastCommitDate(repo = "yuangnz/portafolio") {
    const [date, setDate] = useState<string | null>(null)

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`)
            .then(res => res.json())
            .then(data => {
                if (data && data[0]?.commit?.committer?.date) {
                    setDate(new Date(data[0].commit.committer.date).toLocaleDateString())
                }
            })
    }, [repo])

    return date
}

export { ModeToggle, useLastCommitDate }