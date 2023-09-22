import { Header } from './header'
import { PostCard } from './postCard'
import { Search } from './search'

export function Home() {
  return (
    <div className="">
      <Header />
      <Search />

      <div className="mx-auto mt-14 grid grid-cols-2 gap-8 pb-52">
        <PostCard
          title="Javascript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned)"
        />
        <PostCard
          title="Javascript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned)"
        />
        <PostCard
          title="Javascript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned)"
        />
        <PostCard
          title="Javascript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned)"
        />
        <PostCard
          title="Javascript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned)"
        />
        <PostCard
          title="Javascript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned)"
        />
      </div>
    </div>
  )
}
