import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const searchScreen = () => {
  const [ term, setTerm ] = useState('');
  const [ searchApi, results, errorMessage ] = useResults();

  useEffect(() => {
    searchApi('pasta')
  }, []);

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price);
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMessage? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
   background: {
     backgroundColor: '#fff',
     flex: 1
   }
});

export default searchScreen;
