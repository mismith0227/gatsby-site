import Link from 'next/link'
import { Container, List, Item, StyledLink, Title, Date } from './styles'
import { Props } from './types'
import dayjs from 'dayjs'

export const ReadNext = ({ readNestPosts, className }: Props) => {
  return (
    <Container className={className}>
      <Title>Read next</Title>
      <List>
        {readNestPosts.map((item) => {
          return (
            <Item key={item.id}>
              <Date>{dayjs(item.createdAt).format('YYYY年M月D日')}</Date>
              <Link href={`/blog/${item.category.id}/${item.id}`} passHref>
                <StyledLink>{item.title}</StyledLink>
              </Link>
            </Item>
          )
        })}
      </List>
    </Container>
  )
}
