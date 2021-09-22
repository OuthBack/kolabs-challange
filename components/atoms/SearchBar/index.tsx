import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ISearchForm } from '../../types/useSearchMovies';
import { SearchBarContainer, SearchInput } from './styles';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  onSearch: (queryValue: string) => void;
}

export const SearchBar = ({ onSearch }: IProps): JSX.Element => (
  <SearchBarContainer>
    <form
      onSubmit={async (event: React.FormEvent<ISearchForm>) => {
        event.preventDefault();
        const query = event.currentTarget.elements.query.value;
        onSearch(query);
      }}
    >
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <SearchInput type="text" name="query" />
    </form>
  </SearchBarContainer>
);
