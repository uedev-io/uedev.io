---
title:   "All UENUM and UMETA Specifiers"
excerpt: "Both main and meta specifiers, including undocumented ones."
date:    2021-10-05 00:00:00 +0000
permalink: /docs/uenum-umeta/
tags:
- c++
- unreal
- ui
- basic
- intermediate
- advanced
- material
- umg
- blueprint
- specifiers
subgroups:
- specifiers
- docs
header:
  image-transparent: /assets/unreal/uenum-umeta-title-transparent.png
  teaser: /assets/unreal/uenum-umeta-small.jpg
redirect_from:
- /docs/uenum-umeta
- /docs/enum/
- /docs/enum
- /docs/enums/
- /docs/enums
- /docs/uenum/
- /docs/uenum
- /docs/uenums/
- /docs/uenums
- /docs/UENUM/
- /docs/UENUM
- /docs/meta/
- /docs/meta
- /docs/metas/
- /docs/metas
- /docs/umeta/
- /docs/umeta
- /docs/umetas/
- /docs/umetas
- /docs/UMETA/
- /docs/UMETA
- /docs/UMETAS/
- /docs/UMETAS
- /meta/
- /meta
- /umeta/
- /umeta
- /UMETA/
- /UMETA
- /UMETAS/
- /UMETAS
- /enum/
- /enum
- /uenum/
- /uenum
- /UENUM/
- /UENUM
- /UENUMS/
- /UENUMS
---

**Note:** This page is still a work in progress. There are a lot of meta
specifiers still to document!
{:.notice--danger }

Unreal's [Enum
Specifiers](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/GameplayArchitecture/Metadata/)
page lists all of the core specifiers and many of the metadata specifiers, but
it is not an exhaustive list.

{%
include unreal-specifier-preamble.md
type="UENUM"
%}

# UENUM

{%
include unreal-specifier.md
data=site.data.UE-Specifier-Docs.yaml.uenum
entrypath="unreal-specifier-entry.md"
type="UENUM"
%}

# UMETA

* Technically all properties on UMETA properties are counted as MetaData, but
  unlike others they do not have to be grouped into a `meta` category
* It's possible to add and use your own tags to `UMETA` because they are
  counted as MetaData. Look how
  `MovieSceneBuiltInEasingFunctionCustomization.cpp` uses `UMETA(Grouping)` to
  group together enum values.

{%
include unreal-specifier.md
data=site.data.UE-Specifier-Docs.yaml.umeta
entrypath="unreal-specifier-entry.md"
type="UMETA"
%}

