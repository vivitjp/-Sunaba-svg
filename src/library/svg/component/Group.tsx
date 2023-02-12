//--------------------------------------------
// SVG Tag: <Group>
//--------------------------------------------
type Group = {
  children?: React.ReactNode
} & React.SVGProps<SVGGElement>

export const Group: React.FC<Group> = ({
  filter,
  children,
  ...args
}: Group) => {
  return (
    <g {...args} filter={filter && `url(#${filter})`}>
      {children}
    </g>
  )
}
