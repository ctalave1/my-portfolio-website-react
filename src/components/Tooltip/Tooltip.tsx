import {
  Tooltip as ShadUiTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const Tooltip = ({ children, text }: { children: React.ReactNode, text: string }) => {
  return (
    <TooltipProvider delayDuration={50}>
      <ShadUiTooltip>
        <TooltipTrigger asChild>
          <div>
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </ShadUiTooltip>
    </TooltipProvider>
  )
}
