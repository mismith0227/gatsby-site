import { Details, Summary, List, Item } from './styles'
import { Props } from './types'

export const Toc = ({ className, items }: Props) => {
  return (
    <Details className={className} open>
      <Summary>目次</Summary>
      <List className={className}>
        {items.map((item, index) => (
          <Item key={`${item.id}-${index}`} name={item.name}>
            {item.text}
          </Item>
        ))}
      </List>
    </Details>
  )
}
