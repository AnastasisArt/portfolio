import Image from 'next/image';
import { STACKS } from '@/constants/stacks';
import StackTag from '../StackTag/StackTag';
import {StackGroup} from "../Common.styles";

export default function SwapItUpStack(){
  return (
    <StackGroup>
      <StackTag
        icon={<Image src={STACKS.git.icon} alt="GIT" />}
        label={STACKS.git.label}
        url={STACKS.git.url}
      />
      <StackTag
        icon={<Image src={STACKS.illustrator.icon} alt="Illustrator" />}
        label={STACKS.illustrator.label}
        url={STACKS.illustrator.url}
      />
      <StackTag
        icon={<Image src={STACKS.reactnative.icon} alt="React Native" />}
        label={STACKS.reactnative.label}
        url={STACKS.reactnative.url}
      />
      <StackTag
        icon={<Image src={STACKS.redux.icon} alt="Redux" />}
        label={STACKS.redux.label}
        url={STACKS.redux.url}
      />
      <StackTag
        icon={<Image src={STACKS.sqlite.icon} alt="SQLite" />}
        label={STACKS.sqlite.label}
        url={STACKS.sqlite.url}
      />
    </StackGroup>
  );
}