export interface Upload extends File {
  preview: string
}

export type Props = {
  setUploads: React.Dispatch<any>
  currentImages?: string[]
}
