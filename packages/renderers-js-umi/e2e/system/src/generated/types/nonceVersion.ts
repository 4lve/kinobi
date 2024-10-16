/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  scalarEnum,
  type Serializer,
  u32,
} from '@metaplex-foundation/umi/serializers';

export enum NonceVersion {
  Legacy,
  Current,
}

export type NonceVersionArgs = NonceVersion;

export function getNonceVersionSerializer(): Serializer<
  NonceVersionArgs,
  NonceVersion
> {
  return scalarEnum<NonceVersion>(NonceVersion, {
    size: u32(),
    description: 'NonceVersion',
  }) as Serializer<NonceVersionArgs, NonceVersion>;
}
