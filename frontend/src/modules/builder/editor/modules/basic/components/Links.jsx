/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const SUPPORTED_NETWORKS = {
  linkedin: 'linkedin',
  twitter: 'twitter',
  github: 'github',
  hackerrank: 'hackerrank',
  hackerearth: 'hackerearth',
  codechef: 'codechef',
  leetcode: 'leetcode',
  cssbattle: 'cssbattle',
};

const SUPPORTED_NETWORK_DEFAULT_STATE = {
  linkedin: {
    network: 'linkedin',
    username: 'janedoe',
    url: '',
  },
  twitter: {
    network: 'twitter',
    username: 'janedoe',
    url: '',
  },
  github: {
    network: 'github',
    username: 'janedoe',
    url: '',
  },
  hackerrank: {
    network: 'hackerrank',
    username: 'janedoe',
    url: '',
  },
  hackerearth: {
    network: 'hackerearth',
    username: 'janedoe',
    url: '',
  },
  codechef: {
    network: 'codechef',
    username: 'janedoe',
    url: '',
  },
  leetcode: {
    network: 'leetcode',
    username: 'janedoe',
    url: '',
  },
  cssbattle: {
    network: 'cssbattle',
    username: 'janedoe',
    url: '',
  },
};

const Links = ({
  basicTabs,
  onChangeHandler,
}) => {
  const [networks, setNetworks] = useState(SUPPORTED_NETWORK_DEFAULT_STATE);

  useEffect(() => {
    const defaultNetworks = { ...SUPPORTED_NETWORK_DEFAULT_STATE };
    Object.keys(SUPPORTED_NETWORKS).forEach((ntwk) => {
      const matchedNetwork = basicTabs.profiles.find(
        (profile) => profile.network === ntwk
      );
      if (matchedNetwork) {
        defaultNetworks[ntwk] = matchedNetwork;
      }
    });
    setNetworks(defaultNetworks);
    onChangeHandler(Object.values(defaultNetworks), 'profiles');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onURLChange = (value, network) => {
    const profiles = basicTabs.profiles;
    const matchedNetwork = profiles.find((profile) => profile.network === network);
    matchedNetwork.url = value;
    onChangeHandler(profiles, 'profiles');
  };

  return (
    <>
      <TextField
        label="LinkedIn"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.linkedin].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.linkedin);
        }}
      />
      <TextField
        label="Twitter"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.twitter].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.twitter);
        }}
      />
      <TextField
        label="Github"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.github].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.github);
        }}
      />
      <TextField
        label="Hackerrank"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.hackerrank].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.hackerrank);
        }}
      />
      <TextField
        label="HackerEarth"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.hackerearth].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.hackerearth);
        }}
      />
      <TextField
        label="CodeChef"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.codechef].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.codechef);
        }}
      />
      <TextField
        label="Leetcode"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.leetcode].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.leetcode);
        }}
      />
      <TextField
        label="CSSBattle"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.cssbattle].url}
        onChange={(event) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.cssbattle);
        }}
      />
    </>
  );
};

export default Links;
