import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar, AtCard } from "taro-ui";
import { DOUBAN_API } from "../../constants";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const searchBook = async () => {
    // doubanAPI: https://douban-api-docs.zce.me/book.html#get_book_search
    Taro.request({
      url: `${DOUBAN_API}?q=${searchTerm}`,
      header: {
        "Content-type": "application/text"
      }
    }).then(res => {
      setBooks(res.data.books);
      console.log(res.data.books);
    });
  };

  return (
    <View>
      <AtSearchBar
        showActionButton
        value={searchTerm}
        onChange={setSearchTerm}
        onActionClick={searchBook}
      />
      {books.map(book => (
        <AtCard
          key={book.id}
          note={`${book.summary.substring(0, 50)}...`}
          extra={book.rating.average}
          title={book.title}
          thumb={book.images.small}
        >
          作者 {book.author.join("")}
        </AtCard>
      ))}
    </View>
  );
};

export default SearchPage;
